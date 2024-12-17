<?php
namespace App\Http\Controllers;

use App\Models\UserChannel;
use App\Models\Video;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $suggestions = Video::with('channel')->where('isSuggested', false)->select('v_name', 'description', 'channel_id')->get();
        $res = false;
        if (strlen(File::get(public_path('json/suggestions.json'))) <= 0) {
            $res = File::put(public_path('json/suggestions.json'), $suggestions);
        } else if ($suggestions->count() > 0) {
            $data = File::get(public_path('json/suggestions.json'));
            $data = substr($data, 0, strlen($data) - 2);
            $suggestions = Json::encode($suggestions);
            $suggestions = substr($suggestions, 1, strlen($suggestions) - 1);
            $res = File::put(public_path('json/suggestions.json'), $data . ',' . $suggestions);
        }

        if ($res) {
            Video::where('isSuggested', false)->update([
                'isSuggested' => true,
            ]);
        }
        $data = Video::with('channel')->get();
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

        $data = Video::with('channel')->where('video', 'like', '%' . $video . '%')->limit(1)->get();
        $allVideos = Video::with('channel')->whereNot('video', 'like', '%' . $video . '%')->get();

        if ($data->count() === 1) {
            return inertia('Dashboard', compact('data', 'allVideos', 'subscriptions'));
        } else {
            $data = [['video' => '']];
            return Inertia::render('Dashboard', compact('data', 'allVideos', 'subscriptions'));
        }
    }

    public function fetchData($query)
    {

        return response()->json(['suggestion' => $query]);
        // Video::searchFor($request->input('query'), ['*'])->asFuzzy(1)->get();
    }

    public function getData()
    {
        return response()->json([
            'status' => 'success',
            'data' => 'hello from laravel',
        ]);
    }

    public function search($query)
    {
        return response()->json(['result' => $query]);
    }
}
