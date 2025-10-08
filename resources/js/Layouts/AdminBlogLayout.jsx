import AuthenticatedLayout from './AuthenticatedLayout';
import AdminBBanner from '@/Components/AdminBBanner';

export default function AdminBlogLayout({ children }) {
    return (
        <>
            <AdminBBanner />
            {children}
        </>
    );
}