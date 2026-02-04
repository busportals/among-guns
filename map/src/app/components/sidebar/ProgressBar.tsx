interface ProgressBarProps {
  percentage: number;
  animatedPercentage: number;
}

export function ProgressBar({ percentage, animatedPercentage }: ProgressBarProps) {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0 w-full pb-[40px]">
      <p
        className="bg-clip-text bg-gradient-to-t font-['Bungee:Regular',sans-serif] from-[#7897a9] from-[9.789%] leading-[0.911] not-italic relative shrink-0 text-[16.525px] to-[141.82%] to-white tracking-[-0.9915px]"
        style={{ WebkitTextFillColor: "transparent" }}
      >
        {percentage}%
      </p>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
        <div className="bg-[#141d23] col-1 h-[6px] ml-0 mt-[0.04px] rounded-[25.2px] row-1 w-[203px]" />
        <div
          className="bg-[#1bff63] col-1 h-[6px] ml-0 mt-0 rounded-[25.2px] row-1"
          style={{
            width: `${(animatedPercentage / 100) * 203}px`,
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>
    </div>
  );
}
