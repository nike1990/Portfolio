import Profile from '../pages/Profile/'
import Experiences from '../pages/Experiences/'
import Abilities from '../pages/Abilities/'
import Project from '../pages/Project/'
import Contact from '../pages/Contact/'
import Education from '../pages/Experiences/Education'
import Careers from '../pages/Experiences/Careers'
import Language from '../pages/Abilities/Language'
import Skills from '../pages/Abilities/Skills'

export default  [
    {
        path: '/',
        component: Profile,
        exact: true
    },
    {
        path: '/experiences',
        component: Experiences,
        exact: false
    },
    {
        path: '/abilities',
        component: Abilities,
        exact: false
    },
    {
        path: '/project',
        component: Project,
        exact: false
    },
    {
        path: '/contact',
        component: Contact,
        exact: false
    },
    {
        path: '/education',
        component: Education,
        exact: false
    },
    {
        path: '/careers',
        component: Careers,
        exact: false
    },
    {
        path: '/skills',
        component: Skills,
        exact: false
    },
    {
        path: '/language',
        component: Language,
        exact: false
    },

]

