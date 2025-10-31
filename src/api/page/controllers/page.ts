/**
 * page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::page.page', ({strapi}) => ({
    async emailAction(ctx) {
        const data = ctx.request.body
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'pashamishakov@gmail.com',
                from: 'pashamishakov@gmail.com',
                subject: 'New contact available',
                text: JSON.stringify(data),
            })
        } catch(err) {
            console.log(err)
        }
       
        ctx.body = { message: 'Item created successfully', data };
    }
}));
