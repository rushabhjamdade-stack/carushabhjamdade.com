"use client";

interface BrowserMockupProps {
  title?: string;
  gradient?: string;
  mockupType?: "dashboard" | "form" | "cards" | "document" | "spreadsheet";
  className?: string;
}

export default function BrowserMockup({
  title = "app.example.com",
  gradient = "from-indigo-400 to-violet-500",
  mockupType = "dashboard",
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden ${className}`}
    >
      {/* Browser top bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 ml-2">
          <div className="bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 font-mono max-w-[200px]">
            {title}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div
        className={`bg-gradient-to-br ${gradient} p-6 min-h-[180px] relative overflow-hidden`}
      >
        {mockupType === "dashboard" && <DashboardMockup />}
        {mockupType === "form" && <FormMockup />}
        {mockupType === "cards" && <CardsMockup />}
        {mockupType === "document" && <DocumentMockup />}
        {mockupType === "spreadsheet" && <SpreadsheetMockup />}
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="space-y-3">
      {/* Header bar */}
      <div className="flex items-center justify-between">
        <div className="h-3 w-24 bg-white/30 rounded" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-white/20 rounded" />
          <div className="h-6 w-16 bg-white/30 rounded" />
        </div>
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/15 rounded-lg p-3">
            <div className="h-2 w-10 bg-white/30 rounded mb-2" />
            <div className="h-4 w-14 bg-white/40 rounded" />
          </div>
        ))}
      </div>
      {/* Chart area */}
      <div className="bg-white/10 rounded-lg p-3 flex items-end gap-1.5 h-20">
        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-white/30 rounded-t"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function FormMockup() {
  return (
    <div className="space-y-3 max-w-[220px]">
      <div className="h-3 w-20 bg-white/30 rounded" />
      {[1, 2, 3].map((i) => (
        <div key={i}>
          <div className="h-2 w-16 bg-white/25 rounded mb-1.5" />
          <div className="h-7 bg-white/15 rounded border border-white/20" />
        </div>
      ))}
      <div className="h-8 w-24 bg-white/35 rounded mt-2" />
    </div>
  );
}

function CardsMockup() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white/15 rounded-lg p-3">
          <div className="w-6 h-6 bg-white/25 rounded mb-2" />
          <div className="h-2.5 w-16 bg-white/30 rounded mb-1.5" />
          <div className="h-2 w-full bg-white/15 rounded" />
          <div className="h-2 w-3/4 bg-white/15 rounded mt-1" />
        </div>
      ))}
    </div>
  );
}

function DocumentMockup() {
  return (
    <div className="bg-white/10 rounded-lg p-4 space-y-2.5">
      <div className="h-4 w-32 bg-white/35 rounded" />
      <div className="h-px bg-white/20" />
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-2">
          <div className="h-2 flex-1 bg-white/20 rounded" />
          {i % 2 === 0 && <div className="h-2 w-1/4 bg-white/15 rounded" />}
        </div>
      ))}
      <div className="h-px bg-white/20 mt-2" />
      <div className="flex gap-4">
        <div className="h-2 w-16 bg-white/25 rounded" />
        <div className="h-2 w-16 bg-white/25 rounded" />
      </div>
    </div>
  );
}

function SpreadsheetMockup() {
  return (
    <div className="bg-white/10 rounded-lg overflow-hidden">
      {/* Header row */}
      <div className="grid grid-cols-4 gap-px bg-white/20">
        {["A", "B", "C", "D"].map((col) => (
          <div key={col} className="bg-white/15 px-2 py-1.5 text-center">
            <div className="h-2 w-8 bg-white/30 rounded mx-auto" />
          </div>
        ))}
      </div>
      {/* Data rows */}
      {[1, 2, 3, 4, 5].map((row) => (
        <div key={row} className="grid grid-cols-4 gap-px bg-white/10">
          {[1, 2, 3, 4].map((col) => (
            <div key={col} className="bg-white/5 px-2 py-1.5">
              <div
                className="h-2 bg-white/20 rounded"
                style={{ width: `${40 + Math.random() * 50}%` }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
