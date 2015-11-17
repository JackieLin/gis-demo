/**
 * 测试排除打包文件
 * @author jackie Lin <dashi_lin@163.com>
 */

define('common/excludefile', ['jquery'], function ($) {
    'use strict';

    console.log('This file is excluded by gis');
});
