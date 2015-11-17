/**
 * 测试打包文件
 * @author jackieLin <dashi_lin@163.com>
 */
define('common/util', ['jquery', 'tpl/gis'], function ($, gis) {
    'use strict';
    $('body').html(gis['index.html']);
});
;/**
 * 测试 gis, index 配置为最后声明
 * @author jackie Lin <dashi_lin@163.com>
 */
define('common', ['common/util'], function ($) {
    'use strict';

    return {
        
    }
});
