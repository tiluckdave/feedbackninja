import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';
// import FreePlanEmptyState from '@/components/FreePlanEmptyState';

const Dashboard = () => {
    const auth = useAuth();

    if (!auth.user) {
        return 'Loading...';
    }

    return <EmptyState />;
};

export default Dashboard;