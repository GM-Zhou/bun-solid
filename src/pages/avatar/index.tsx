import type { RouteSectionProps } from '@solidjs/router';
import { createEffect, createSignal, onCleanup } from 'solid-js';

const AvatarUpload = (props: RouteSectionProps) => {
  createEffect(() => {
    console.log('location :>> ', { ...props.location.query });
  });

  const [preview, setPreview] = createSignal<string>();
  const [dominantColor, setDominantColor] = createSignal<string>('#f0f0f0');

  const handleFileChange = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      analyzeImageColor(url);
    }
  };

  const analyzeImageColor = (imageUrl: string) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let r = 0,
        g = 0,
        b = 0;

      for (let i = 0; i < imageData.length; i += 4) {
        r += imageData[i];
        g += imageData[i + 1];
        b += imageData[i + 2];
      }

      const pixels = imageData.length / 4;
      r = Math.round(r / pixels);
      g = Math.round(g / pixels);
      b = Math.round(b / pixels);

      setDominantColor(`rgb(${r}, ${g}, ${b})`);
    };
  };

  onCleanup(() => {
    // 修复逻辑：将条件判断和URL撤销操作分开，确保是函数调用
    const previewUrl = preview();
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  });

  return (
    <div class='flex flex-col items-center gap-4 p-8 bg-gray-100 rounded-lg'>
      <h1 class='text-2xl font-bold'>选择头像</h1>

      <div class='relative'>
        <div
          class='absolute inset-0 border-4 border-white rounded-full opacity-30 pointer-events-none'
          style={{ 'background-color': dominantColor() }}
        />

        {preview() ? (
          <img
            src={preview()}
            alt='头像预览'
            class='w-32 h-32 rounded-full object-cover relative z-10'
          />
        ) : (
          <div class='w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center relative z-10'>
            <span class='text-gray-500'>暂无头像</span>
          </div>
        )}
      </div>

      <label class='px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition-colors'>
        选择图片
        <input type='file' accept='image/*' onChange={handleFileChange} class='hidden' />
      </label>
    </div>
  );
};

export default AvatarUpload;
