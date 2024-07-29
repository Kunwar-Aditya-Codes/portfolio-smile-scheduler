import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('max-w-[85rem] mx-auto sm:px-4', className)}>
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
