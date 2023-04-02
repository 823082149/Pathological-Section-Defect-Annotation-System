import Layout from '../layout'


export const checkerRoutes = [
    //审核员端
    //审核
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '审核',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['user']
        },
        children: [{
            path: 'table-inline-edit',
            name: 'TableInlineEdit',
            component: () =>
                import ('../views/form-table/TableInlineEdit'),
            meta: {
                title: '审核'
            }
        }]
    },
    //审核记录
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '审核记录',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['user']
        },
        children: [{
            path: 'table-inline-edit',
            name: 'TableInlineEdit',
            component: () =>
                import ('../views/form-table/TableInlineEdit'),
            meta: {
                title: '审核记录'
            }
        }]
    },
]