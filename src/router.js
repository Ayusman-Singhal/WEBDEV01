import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';
import RequestTutor from './components/RequestTut.vue';
import BecomeTutor from './components/BecomeTutor.vue';
import TopTeachers from './components/TopTeachers.vue';
import TutorProfilePage from './components/TutorProfilePage.vue';
import StudentProfilePage from './components/StudentProfilePage.vue'; 
import Login from './components/Login.vue';
import InboxPage from './components/InboxPage.vue';
import TeacherDashboard from './components/TeacherDashboard.vue';
import Careers from './views/Careers.vue';
import FAQ from './components/FAQ.vue';

const routes = [
    // Add a default route that redirects to home
    { path: '/', redirect: '/home' },
    { path: '/home', component: HelloWorld, name: 'HelloWorld' },
    { path: '/about', component: About, name: 'About' },
    { path: '/requestTutor', component: RequestTutor, name: 'RequestTutor' },
    { path: '/becomeTutor', component: BecomeTutor, name: 'BecomeTutor' },
    { path: '/topTeachers', component: TopTeachers, name: 'TopTeachers' },
    { path: '/tutorProfiles', component: TutorProfilePage, name: 'TutorProfilePage' }, 
    { path: '/studentProfile', component: StudentProfilePage, name: 'StudentProfilePage' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/inbox', component: InboxPage, name: 'Inbox' },
    { 
        path: '/teacher/dashboard', 
        component: TeacherDashboard, 
        name: 'TeacherDashboard',
        meta: { 
            requiresAuth: true,
            teacherOnly: true 
        }
    },
    {
        path: '/careers',
        name: 'Careers',
        component: Careers
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ
    },
    // Catch-all route for 404 pages
    { path: '/:pathMatch(.*)*', redirect: '/home' }
];

const router = createRouter({
    // Use hash mode for GitHub Pages compatibility
    history: createWebHashHistory(import.meta.env.BASE_URL || '/WEBDEV01/'),
    routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') // You'll need to set this on login
    const userType = localStorage.getItem('userType') // 'teacher' or 'student'
    // If route requires auth and user isn't authenticated
    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'Login' })
    }
    // If route is teacher-only and user isn't a teacher
    else if (to.meta.teacherOnly && userType !== 'teacher') {
        next({ name: 'HelloWorld' })
    }
    else {
        next()
    }
})

export default router;
