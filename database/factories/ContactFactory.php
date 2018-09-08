<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Contact::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'number' => $faker->phoneNumber
    ];
});
