import Layout from '../layout'


export const userRoutes = [
    //医院用户端
    //查看结果
    {
        path: '/form-table',
        name: 'FormTable',
        component: Layout,
        redirect: '/form-table/table-classic',
        meta: {
            title: '查看结果',
            icon: 'vue-dsn-icon-biaoge',
            roles: ['user']
        },
        children: [{
            path: 'table-inline-edit',
            name: 'TableInlineEdit',
            component: () =>
                import ('../views/form-table/TableInlineEdit'),
            meta: {
                title: '查看结果'
            }
        }]
    },
    //上传切片
    {
        path: '/tools',
        name: 'Tools',
        component: Layout,
        redirect: '/tools/image-upload',
        meta: {
            title: '上传图片',
            icon: 'vue-dsn-icon-zujian',
            roles: ['user']
        },
        children: [{
            path: 'image-upload',
            name: 'ImageUpload',
            component: () =>
                import ('../views/tools/ImageUpload'),
            meta: {
                title: '上传图片'
            }
        }, ]
    },

]