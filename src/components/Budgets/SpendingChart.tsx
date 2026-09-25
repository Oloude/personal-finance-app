

type GradientStop = {
  color: string;
  start: number;
  end: number;
};

type SpendingChartProps = {
  amount: number;
  limit: number;
  gradients: GradientStop[];
};

function SpendingChart({
  amount,
  limit,
  gradients,
}: SpendingChartProps) {
  const gradient = gradients
    .map(({ color, start, end }) => `${color} ${start}deg ${end}deg`)
    .join(", ");

  return (
    <div className="  flex items-center justify-center w-full">
      <div className="h-60 w-60 relative">
      {/* Ring */}
      <div
        className="absolute inset-0 rounded-full "
        style={{
          background: `conic-gradient(from 0deg, ${gradient})`,
        }}
      />

      {/* Center */}
      <div className="bg-white/15 absolute inset-9 z-2 rounded-full"> </div>
      <div className="absolute inset-12 flex flex-col items-center justify-center rounded-full bg-white z-3">
     
        <h2 className="text-preset1 font-bold text-grey900">
          ${amount}
        </h2>

        <p className="mt-1 text-preset5 text-grey500">
          of ${limit} limit
        </p>
        
      </div>
     </div>
    </div>
  );
}

export default SpendingChart;