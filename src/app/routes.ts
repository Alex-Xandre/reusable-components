import Dashboard from "../features/dashboard";
import Department from "../features/department";
import Section from "../features/section";
import Users from "../features/user";


export const RoutesMaster = [
    {
        Path: '/users',
        Element: Users,
        Title: 'Users',
        AuthRequired: false
    },
    {
        Path: '/department',
        Element: Department,
        Title: 'Department',
        AuthRequired: false
    },
    {
        Path: '/',
        Element: Dashboard,
        Title: 'Home',
        AuthRequired: false
    },
    {
        Path: '/sections',
        Element: Section,
        Title: 'Section',
        AuthRequired: false
    }
]
