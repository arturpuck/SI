<?php

// function getRootPathByEnvironement() : string
// {
//     return match(env('APP_ENV')){
//         'local' => base_path('public'),
//         'staging' => env('STAGING_ROOT'),
//         'production' => env('PRODUCTION_ROOT'),
//         'testing' => storage_path('app')
//     };
// }

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application. Just store away!
    |
    */

    'default' => env('FILESYSTEM_DRIVER', 'local'),

    'avatar_directory' => env('AVATARS_DIRECTORY', '/images/decoration/users/avatars/'),
    'prostitution' => [
        'photos' => 'images/prostitution/',
        'photos_directory_approved' => 'approved'
    ],

    /*
    |--------------------------------------------------------------------------
    | Default Cloud Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Many applications store files both locally and in the cloud. For this
    | reason, you may specify a default "cloud" driver here. This driver
    | will be bound as the Cloud disk implementation in the container.
    |
    */

    'cloud' => env('FILESYSTEM_CLOUD', 's3'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    | Supported Drivers: "local", "ftp", "sftp", "s3"
    |
    */

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root' => match(env('APP_ENV')){
                'local' => storage_path('app'),
                'staging' => env('STAGING_STORAGE'),
                'production' => env('PRODUCTION_STORAGE'),
                'testing' => storage_path('app')
            }   
        ],

        'public' => [
            'driver' => 'local',
            'root' => match(env('APP_ENV')){
                'local' => base_path('public'),
                'staging' => env('STAGING_ROOT'),
                'production' => env('PRODUCTION_ROOT'),
                'testing' => storage_path('app')
            }, 
            'url' => env('APP_URL'),
            'visibility' => 'public',
        ],

        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
        ],

    ],

];
