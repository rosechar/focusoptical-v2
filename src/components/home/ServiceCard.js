export function ServiceCard({ Icon, title }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        {Icon && <Icon className="w-8 h-8" />}
      </div>
      <h3 className="text-xl">{title}</h3>
    </div>
  );
}

export default ServiceCard;
