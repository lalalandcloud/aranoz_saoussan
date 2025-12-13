import AuthenticatedLayout from './AuthenticatedLayout';
import AdminBanner from '@/Components/AdminBanner';

export default function AdminLayout({ children }) {
    return (
        <>
            <AdminBanner />
            {children}
        </>
    );
}