<?php
namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $data = Video::all();
        return Inertia::render('Home', compact('data'));
    }

    public function getUser()
    {
        return Inertia::render('UserPage');
    }

    public function __invoke(Request $request)
    {
        $file = $request->video;
        $path = $file->store('videos', 'public');
        Video::create([
            'v_name' => $request->name,
            'description' => $request->description,
            'video' => $path,
        ]);
    }

    public function read(string $video)
    {
        $data = Video::where('video', 'videos/' . $video . '.mp4')->limit(1)->get();
        return inertia('Dashboard', $data->count() == 1 ? compact('data') : ['data' => [['video' => '']]]);
    }
}
