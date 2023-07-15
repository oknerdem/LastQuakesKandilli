type BoxProps = {
  children: React.ReactNode;
};

function Box({ children }: BoxProps) {
  return (
    <section className="w-full md:max-h-[85%] max-h-[75%] h-full flex flex-col items-center justify-end gap-4 fixed bottom-0 left-1/2 transform -translate-x-1/2 px-4">
      {children}
    </section>
  );
}

export default Box;
