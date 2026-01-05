import React from 'react'

function Donation() {
  return (
    <div className="bg-[#fdfaf7] min-h-screen px-4 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4a2c1f] mb-4">
          Make a Difference Today
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your generous donation helps us rescue, care for, and find loving homes for animals in need.
          Every contribution makes a real difference.
        </p>
      </div>

      {/* Donation Options */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* One-time Donation */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-orange-500 text-3xl mb-4">💝</div>
          <h3 className="text-xl font-semibold text-[#4a2c1f] mb-3">One-time Donation</h3>
          <p className="text-gray-600 mb-6">
            Make a single donation to support our immediate needs and emergency rescues.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 py-3 rounded-lg font-medium transition">
              $25
            </button>
            <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 py-3 rounded-lg font-medium transition">
              $50
            </button>
            <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 py-3 rounded-lg font-medium transition">
              $100
            </button>
            <input
              type="number"
              placeholder="Custom amount"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Monthly Donation */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-blue-500 text-3xl mb-4">🔄</div>
          <h3 className="text-xl font-semibold text-[#4a2c1f] mb-3">Monthly Giving</h3>
          <p className="text-gray-600 mb-6">
            Become a monthly supporter and provide consistent care for animals year-round.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 py-3 rounded-lg font-medium transition">
              $10/month
            </button>
            <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 py-3 rounded-lg font-medium transition">
              $25/month
            </button>
            <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 py-3 rounded-lg font-medium transition">
              $50/month
            </button>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition">
              Become a Monthly Donor
            </button>
          </div>
        </div>

        {/* Supply Donation */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-green-500 text-3xl mb-4">🎁</div>
          <h3 className="text-xl font-semibold text-[#4a2c1f] mb-3">Supply Donation</h3>
          <p className="text-gray-600 mb-6">
            Donate essential supplies that animals need daily for comfort and care.
          </p>
          <ul className="space-y-2 text-gray-600 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Pet Food
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Blankets & Beds
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Toys & Enrichment
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Medical Supplies
            </li>
          </ul>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition">
            View Supply Wishlist
          </button>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-6xl mx-auto bg-[#f4eddf] rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-[#4a2c1f] mb-6 text-center">Your Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <p className="text-gray-600">Animals Rescued</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">300+</div>
            <p className="text-gray-600">Forever Homes</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
            <p className="text-gray-600">Medical Treatments</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <p className="text-gray-600">Volunteers</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-xl font-semibold text-[#4a2c1f] mb-4">Other Ways to Give</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-[#4a2c1f] mb-2">Corporate Sponsorship</h4>
            <p className="text-gray-600 text-sm mb-3">Partner with us to make a larger impact</p>
            <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
              Learn More →
            </button>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-[#4a2c1f] mb-2">Legacy Giving</h4>
            <p className="text-gray-600 text-sm mb-3">Include us in your estate planning</p>
            <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
              Learn More →
            </button>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-[#4a2c1f] mb-2">Fundraise for Us</h4>
            <p className="text-gray-600 text-sm mb-3">Start your own fundraising campaign</p>
            <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donation
