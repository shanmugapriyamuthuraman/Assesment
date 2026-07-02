export default function SettingsPage() {
  return (
    <div style={{ background: "#ffffff" }} className="px-6 pt-6 min-h-screen">
      <h1 className="text-xl font-bold text-gray-900 mb-4">Settings</h1>
      <div className="max-w-md space-y-4">
        {[
          { label: "Account", description: "Manage your profile and preferences" },
          { label: "Notifications", description: "Configure reading reminders and alerts" },
          { label: "Reading preferences", description: "Font size, theme, and display options" },
          { label: "Privacy", description: "Control your data and reading history" },
          { label: "Language", description: "Choose your preferred language" },
        ].map((s) => (
          <button
            key={s.label}
            className="w-full flex items-start p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors text-left"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{s.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
