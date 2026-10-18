# TripWise — Smart Travel Planner

TripWise is a responsive client-side travel-planning application developed for the **AWS Student Builder Group Recruitment Task (Track 1: Frontend Development)**.

## Live Demo & Repository
- **Live Deployment**: [Your live link here]
- **GitHub Repository**: [Your repo link here]

## Features Built
1. **Destination Discovery**: Real-time integration with the **Wikipedia / Wikimedia REST API** fetching places, thumbnails, and descriptions.
2. **Search, Filter & Sort**:
   - Debounced search across titles, countries, and descriptions.
   - Filter by categories (*Landmarks, Nature, Historical, Beaches*).
   - Sort alphabetically (A-Z, Z-A) or by popularity.
3. **Destination Details & Live Weather**: Detailed view featuring real-time temperature, wind speed, and weather conditions from the **Open-Meteo External API**.
4. **Itinerary Management**: Add and remove destinations to a dedicated "My Trip" view with continuous persistence in `localStorage`.
5. **State & Error Handling**: Loading skeletons, empty search results screen, and network failure fallback with a manual retry option.

## APIs Used
- [Wikimedia Page Summary API](https://en.wikipedia.org/api/rest_v1/)
- [Open-Meteo Weather Forecast API](https://open-meteo.com/en/docs)

## Setup & Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/tripwise.git
   