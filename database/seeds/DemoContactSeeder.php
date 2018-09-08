<?php

use Illuminate\Database\Seeder;

class DemoContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Contact::class, 25)->create();
    }
}
