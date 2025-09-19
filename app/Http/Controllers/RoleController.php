<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
     public function dashboard(Request $request)
    {
        $roles = Role::all();
        $users = User::with(['role'])->get();
                    
        return Inertia::render('Admin/Dashboard', compact('users', 'roles'));
    }
 public function destroyUser(User $user)
    {
        if ($user->id === auth()->id()) {
            return back()->with('error', 'Impossible de supprimer votre propre compte');
        }

        // $user->cars()->delete(); 
        $user->delete();

        return back()->with('success', 'Utilisateur supprimé');
    }
}
