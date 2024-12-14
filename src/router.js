import { createRouter, createWebHistory } from 'vue-router';
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

const routes = [
    { path: '/', component: HelloWorld, name: 'HelloWorld' },
    { path: '/about', component: About, name: 'About' },
    { path: '/requestTutor', component: RequestTutor, name: 'RequestTutor', meta: { requiresAuth: true, studentOnly: true } },
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const userType = localStorage.getItem('userType')

    if (to.meta.requiresAuth && !isAuthenticated) {
        next({ 
            name: 'Login',
            query: { redirect: to.fullPath }
        })
    }
    else if (to.meta.teacherOnly && userType !== 'teacher') {
        next({ name: 'Home' })
    }
    else if (to.meta.studentOnly && userType !== 'student') {
        next({ name: 'Home' })
    }
    else {
        next()
    }
})

export default router;
