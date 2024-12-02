import React from "react";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Steps to Delete an Account
        </h1>

        {/* Section for User App */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">In the User App</h2>

          {/* Step 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Login to the Order App</h3>
            <p>Open the Voigo user app and log in to your account.</p>
          </div>

          {/* Step 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Access Account Options</h3>
            <p>
              On the app bar at the top right corner, you will see three dots.
            </p>
            <div className="mt-4 bg-gray-200 rounded-lg h-40 flex items-center justify-center text-gray-500">
              (Add Image Here: Highlighting the three dots on the app bar)
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Open the Menu</h3>
            <p>
              Click on the three dots to open a dropdown menu. Two options will
              appear:
              <ul className="list-disc ml-6 mt-2">
                <li>Logout</li>
                <li>Delete Account</li>
              </ul>
            </p>
            <div className="mt-4 bg-gray-200 rounded-lg h-40 flex items-center justify-center text-gray-500">
              (Add Image Here: Displaying the dropdown menu with the "Logout"
              and "Delete Account" options)
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Delete Your Account</h3>
            <p>
              Select the "Delete Account" option to proceed. A confirmation
              prompt will appear to ensure you want to delete your account.
            </p>
            <div className="mt-4 bg-gray-200 rounded-lg h-40 flex items-center justify-center text-gray-500">
              (Add Image Here: Showing the confirmation prompt)
            </div>
          </div>

          {/* Step 5 */}
          <div>
            <h3 className="text-xl font-medium">Confirm Deletion</h3>
            <p>Confirm your action to permanently delete your account.</p>
          </div>
        </div>

        {/* Section for Delivery App */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">In the Delivery App</h2>
          <p>The steps are identical to the user app:</p>

          {/* Step 1 */}
          <div className="mb-6 mt-4">
            <h3 className="text-xl font-medium">
              Login to the Delivery Partner App
            </h3>
            <p>Open the Voigo delivery app and log in to your account.</p>
          </div>

          {/* Step 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Access Account Options</h3>
            <p>
              On the app bar at the top right corner, locate the three dots.
            </p>
            <div className="mt-4 bg-gray-200 rounded-lg h-40 flex items-center justify-center text-gray-500">
              (Add Image Here: Highlighting the three dots on the delivery app
              interface)
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Open the Menu</h3>
            <p>
              Tap on the three dots to open a dropdown menu. You will see two
              options:
              <ul className="list-disc ml-6 mt-2">
                <li>Logout</li>
                <li>Delete Account</li>
              </ul>
            </p>
            <div className="mt-4 bg-gray-200 rounded-lg h-40 flex items-center justify-center text-gray-500">
              (Add Image Here: Displaying the dropdown menu with the "Logout"
              and "Delete Account" options)
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-6">
            <h3 className="text-xl font-medium">Delete Your Account</h3>
            <p>
              Choose the "Delete Account" option and follow the confirmation
              steps.
            </p>
            <div className="mt-4 bg-gray-200 rounded-lg h-40 flex items-center justify-center text-gray-500">
              (Add Image Here: Showing the confirmation prompt for the delivery
              app)
            </div>
          </div>

          {/* Step 5 */}
          <div>
            <h3 className="text-xl font-medium">Confirm Deletion</h3>
            <p>Confirm your choice to delete your account permanently.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
