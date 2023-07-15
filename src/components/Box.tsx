type BoxProps = {
  children: React.ReactNode;
};

function Box({ children }: BoxProps) {
  return (
    <section className="w-full h-full flex flex-col items-center justify-end gap-4">
      {children}
    </section>
  );
}

export default Box;
