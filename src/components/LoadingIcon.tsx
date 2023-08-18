import { IconLoader2 } from '@tabler/icons-react';

export default function LoadingIcon() {
  return (
    <div className='flex w-full h-full items-center justify-center'>
      <IconLoader2
        className='animate-spin text-neutral-500 dark:text-neutral-400'
        size={22}
      />
    </div>
  );
}
