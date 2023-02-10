<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a>
<a href="https://vuejs.org" target="_blank"><img src="https://avatars.githubusercontent.com/u/6128107?s=280&v=4" width="150" alt="Vue Logo"></a>
</p>

# Survey App

A survey application built with Laravel 9 (API), Vue 3 and Tailwind CSS.

## Features

-   User authentication and authorization
-   Create and manage surveys
-   Submit and view survey responses (Not done yet)
-   Responsive UI built with Tailwind CSS

## Requirements

-   PHP 8.0 or higher
-   MySQL
-   Node.js
-   NPM

## Installation

### Laravel

Clone the repository

```bash
  git clone https://github.com/Wansrif/laravel-vue-survey.git

  cd laravel-vue-survey
```

Install dependencies

```bash
  composer install
```

Create a copy of the .env file

```bash
  cp .env.example .env
```

Update the .env file with your database details

Generate an application key & run database migrations

```bash
  php artisan key:generate

  php artisan migrate
```

Once that's done, you should be able to run the app on your localhost.

```bash
  php artisan serve
```

### Vue

Change into the frontend directory

```bash
  cd vue
```

Install dependencies & start the development server

```bash
  npm install && npm run dev
```

## Contributing

If you'd like to contribute to the project, please open a pull request. let me see what you can add!
