

const Card: React.FC<{
    icon: string;
    title: string;
    subtitle: string;
    progressColor: string;
    progressWidth: string;
}> = ({ icon, title, subtitle, progressColor, progressWidth }) => (
    // ... rest of the component

    <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="text-4xl mb-4">
            <i className={icon}></i>
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">{subtitle}</p>
        <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div style={{ width: progressWidth }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${progressColor}`}></div>
            </div>
        </div>
    </div>
);

const Activity = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card 
                icon="fas fa-truck text-purple-500" 
                title="Delivered" 
                subtitle="15 New Packages" 
                progressColor="bg-purple-500" 
                progressWidth="40%" 
            />
            <Card 
                icon="fas fa-receipt text-orange-500" 
                title="Ordered" 
                subtitle="72 New Items" 
                progressColor="bg-orange-500" 
                progressWidth="70%" 
            />
            <Card 
                icon="fas fa-chart-bar text-blue-500" 
                title="Reported" 
                subtitle="50 Support New Cases" 
                progressColor="bg-blue-500" 
                progressWidth="50%" 
            />
            <Card 
                icon="fas fa-paper-plane text-green-500" 
                title="Arrived" 
                subtitle="34 Upgraded Boxed" 
                progressColor="bg-green-500" 
                progressWidth="60%" 
            />
        </div>
    </div>
);

export default Activity;