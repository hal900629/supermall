import {request} from './request.js';

export function homeGetMultiData() {
    return request({
        url: 'home/multidata'
    })
}