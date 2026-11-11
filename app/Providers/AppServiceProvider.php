<?php

namespace App\Providers;

use App\Language;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\App;
use Laravel\Passport\Console\ClientCommand;
use Laravel\Passport\Console\InstallCommand;
use Laravel\Passport\Console\KeysCommand;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $request = request();
        if ($request->isMethod('get') && $request->path() === 'api/podcast/54575') {
            $queries = [];

            DB::listen(function ($query) use (&$queries) {
                // QueryExecuted::$sql is the SQL template; bindings are intentionally omitted.
                $queries[] = ['sql' => $query->sql, 'time_ms' => $query->time];
            });

            app()->terminating(function () use (&$queries) {
                $patterns = [];
                foreach ($queries as $query) {
                    $sql = $query['sql'];
                    if (!isset($patterns[$sql])) {
                        $patterns[$sql] = ['count' => 0, 'time_ms' => 0];
                    }
                    $patterns[$sql]['count']++;
                    $patterns[$sql]['time_ms'] += $query['time_ms'];
                }

                Log::info('Podcast SQL diagnostic', [
                    'method' => 'GET',
                    'path' => 'api/podcast/54575',
                    'query_count' => count($queries),
                    'cumulative_sql_time_ms' => array_sum(array_column($queries, 'time_ms')),
                    'patterns' => $patterns,
                ]);
            });
        }

        if( file_exists('env') ) {
            App::setLocale(Language::default());
        }
        JsonResource::withoutWrapping();
        Schema::defaultStringLength(191);
        $this->commands([
            InstallCommand::class,
            ClientCommand::class,
            KeysCommand::class,
        ]);
    }
}
