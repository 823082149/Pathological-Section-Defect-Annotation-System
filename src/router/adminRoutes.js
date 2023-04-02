import Layout from '../layout'


export const adminRoutes = [
    //管理员端
    //切片管理
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '切片管理',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['admin']
        },
        children: [{
            path: 'table-inline-edit',
            name: 'TableInlineEdit',
            component: () =>
                import ('../views/form-table/TableInlineEdit'),
            meta: {
                title: '切片管理'
            }
        }]
    },
    //标注结果管理
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '标注结果管理',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['admin']
        },
        children: [{
            path: 'table-inline-edit',
            name: 'TableInlineEdit',
            component: () =>
                import ('../views/form-table/TableInlineEdit'),
            meta: {
                title: '标注结果管理'
            }
        }]
    },
    //人员管理
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '人员管理',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['admin']
        },
        children: [{
            path: 'table-inline-edit',
            name: 'TableInlineEdit',
            component: () =>
                import ('../views/form-table/TableInlineEdit'),
            meta: {
                title: '人员管理'
            }
        }]
    },

]