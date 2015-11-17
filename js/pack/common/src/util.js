/**
 * 测试打包文件
 * @author jackieLin <dashi_lin@163.com>
 */
define('common/util', ['jquery', 'tpl/gis'], function ($, gis) {
    'use strict';
    $('body').html(gis['index.html']);
});
