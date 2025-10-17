<div class="flex min-h-screen items-center justify-center">
    <div class="card lg:card-side bg-base-100 shadow-sm w-full max-w-7xl">
        <figure class="hidden lg:block lg:w-1/2">
            <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
            />
        </figure>
        <div class="card-body justify-center px-6 lg:px-16">
            <h2 class="text-center lg:text-left font-bold text-4xl">
                Welcome Back
            </h2>
            <form
                class="mt-8 w-full max-w-md space-y-4 mx-auto lg:mx-0"
                method="POST"
            >
                <div class="form-control">
                    <label
                        class="block text-sm font-medium text-base-content/70"
                        for="email">Email address</label
                    >
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        class="input input-bordered input-lg mt-2 w-full"
                        required
                    />
                </div>

                <div class="form-control">
                    <label
                        class="block text-sm font-medium text-base-content/70"
                        for="password">Password</label
                    >
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        class="input input-bordered input-lg mt-2 w-full"
                        required
                    />
                </div>

                <div
                    class="flex flex-wrap items-center justify-between gap-2 text-sm"
                >
                    <label
                        class="inline-flex items-center gap-2 text-base-content/70"
                    >
                        <input
                            type="checkbox"
                            name="remember"
                            class="checkbox checkbox-sm"
                        />
                        <span>Remember me</span>
                    </label>
                    <a href="##" class="link link-primary">Forgot password?</a>
                </div>

                <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-soft w-full"
                    >Sign In</button
                >

                <div class="divider divider-primary">or continue with</div>

                <button
                    type="button"
                    class="btn btn-info btn-lg btn-soft w-full gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="h-5 w-5"
                        fill="currentColor"
                    >
                        <path
                            d="M21.6 12.227c0-.638-.057-1.252-.164-1.84H12v3.48h5.384a4.602 4.602 0 0 1-1.996 3.02v2.51h3.232c1.89-1.74 2.98-4.3 2.98-7.17Z"
                        />
                        <path
                            d="M12 22c2.7 0 4.964-.896 6.619-2.405l-3.232-2.51c-.896.6-2.043.952-3.387.952-2.605 0-4.812-1.76-5.6-4.126H3.05v2.597A9.999 9.999 0 0 0 12 22Z"
                        />
                        <path
                            d="M6.4 13.91c-.2-.6-.316-1.248-.316-1.91s.116-1.31.316-1.91V7.493H3.05A9.998 9.998 0 0 0 2 12s0 .002 0 .003a9.998 9.998 0 0 0 1.05 4.507l3.35-2.6Z"
                        />
                        <path
                            d="M12 6.048c1.468 0 2.783.505 3.82 1.5l2.865-2.865C16.957 2.896 14.7 2 12 2 7.7 2 3.934 4.352 1.95 7.493l3.35 2.597C7.188 7.808 9.395 6.048 12 6.048Z"
                        />
                    </svg>
                    Sign in with Google
                </button>
            </form>
        </div>
    </div>
</div>
