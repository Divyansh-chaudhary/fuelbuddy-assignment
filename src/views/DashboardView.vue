<template>
  <main class="flex items-center justify-center min-h-screen">
    <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
    >
      <div class="flex justify-end px-4 pt-4 relative w-fit ml-auto">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span class="sr-only">Open dropdown</span>
          <MoreIcon />
        </button>
        <div
          id="dropdown"
          class="z-10 absolute top-full hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul class="py-2" aria-labelledby="dropdownButton">
            <li class="text-center">
              <button
                class="inline-block text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-1.5"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-center pb-10">
        <AvatarIcon />
        <h5 class="my-1 text-xl font-medium text-gray-900">User name</h5>
        <span class="text-sm text-gray-500">user email</span>
      </div>
    </div>
  </main>
</template>
