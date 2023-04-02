import Layout from '../layout'


export const annotaterRoutes = [
    //标注员端
    //标注
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '标注',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['user']
        },
        children: [{
            path: 'table-inline-edit',
            name: 'TableInlineEdit',
            component: () =>
                import ('../views/form-table/TableInlineEdit'),
            meta: {
                title: '标注'
            }
        }]
    },
    //标注记录
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '标注记录',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['user']
        },
        children: [{
            path: 'table-inline-edit2',
            name: 'TableInlineEdit',
            component: () =>
                import ('../views/form-table/TableInlineEdit'),
            meta: {
                title: '标注记录'
            }
        }]
    },
    
]