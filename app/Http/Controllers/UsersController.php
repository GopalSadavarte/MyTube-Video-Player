<?php
namespace App\Http\Controllers;

use App\Models\UserChannel;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $data = Video::all();
        $subscriptions = UserChannel::with('user', 'channel')->where('user_id', 1)->get();
        return Inertia::render('Home', compact('data', 'subscriptions'));
    }

    public function getUser()
    {
        $subscriptions = UserChannel::with('user', 'channel')->where('user_id', 1)->get();
        return Inertia::render('UserPage', compact('subscriptions'));
    }

    public function __invoke(Request $request)
    {
        $file = $request->video;
        $path = $file->store('videos', 'public');
        Video::create([
            'v_name' => $request->name,
            'description' => $request->description,
            'video' => $path,
            'channel_id' => 1,
        ]);
    }

    public function read(string $video)
    {
        // $data = Video::where('video', 'videos/' . $video . '.mp4')->limit(1)->get();
        // $allVideos = Video::whereNot('video', 'videos/' . $video . '.mp4')->get();
        $subscriptions = UserChannel::with('user', 'channel')->where('user_id', 1)->get();

        $data = Video::where('video', 'like', '%' . $video . '%')->limit(1)->get();
        $allVideos = Video::whereNot('video', 'like', '%' . $video . '%')->get();
        return inertia('Dashboard', $data->count() == 1 ? compact('data', 'allVideos', 'subscriptions') : ['data' => [['video' => '']], compact('allVideos', 'subscriptions')]);
    }

    public function fetchData(Request $request)
    {
        // Video::searchFor($request->input('query'), ['*'])->asFuzzy(1)->get();
    }

    public function getData()
    {
        return response()->json([
            'status' => 'success',
            'data' => 'hello from laravel',
        ]);
    }
}
