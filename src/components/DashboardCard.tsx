import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  unit: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  unit,
  subtitle,
  bgColor,
  textColor
}) => {
  return (
    <div className={`${bgColor} ${textColor} rounded-xl p-6 h-32 flex flex-col justify-center`}>
      {title && <p className="text-sm opacity-90 mb-1">{title}</p>}
      {value && (
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{value}</span>
          {unit && <span className="text-lg">{unit}</span>}
        </div>
      )}
      {subtitle && <p className="text-sm opacity-90 mt-1">{subtitle}</p>}
    </div>
  );
};

export default DashboardCard;