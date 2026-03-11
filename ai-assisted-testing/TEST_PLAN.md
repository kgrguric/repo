1. **Introduction**
This document outlines the testing strategy for the Media Gallery management application. The objective is to ensure system stability, correct input validation, and functional reliability across core modules including Registration, Login, Gallery Management, and Search.

2. **Test Scenarios by Functionality**
Registration
TC-001: Validate email format (High Priority)

TC-002: Validate password length and confirmation (High Priority)

TC-003: Prevent duplicate user registration (High Priority)

BUG-005: Test input limits and special characters for Username/Pass (High Priority)

Login
OBS-001: Verify account lockout mechanism (High Priority)

BUG-018: Check consistency of login field labels (Email vs Username) (Medium Priority)

BUG-009: Test Social Login authentication services (High Priority)

Gallery
BUG-001: Test "Infinite scroll" and content loading logic (Critical Priority)

BUG-002: Verify actual image rendering vs. empty containers (High Priority)

BUG-004: Verify album rendering and interaction stability (Critical Priority)

BUG-017: Test Fullscreen photo view (404 error check) (Critical Priority)

Search
BUG-003: Test search functionality with spaces in queries (High Priority)

BUG-010: Verify search index consistency and duplicate results (High Priority)

BUG-016: Verify search result relevance (High Priority)

Upload
BUG-013: Validate uniqueness of photo names (High Priority)

BUG-014: Verify photo visibility after upload completion (High Priority)

BUG-006: Test 'Add Image' trigger functionality (Low Priority)

UI/UX
BUG-011: Check for redundant placeholder text (Low Priority)

BUG-012: Test hover states on UI icons (Low Priority)

BUG-019: Check UI overlap (Search result overlay) (Low Priority)

Mobile
BUG-015: Test gallery/search responsiveness on iOS Safari (Critical Priority)

Password Recovery
BUG-007: Test error handling during password recovery (Medium Priority)

BUG-008: Validate integrity of password reset email link (Critical Priority)

3. **Testing Strategy**
Manual Testing: Focused on exploratory testing, UI/UX consistency, and edge cases where visual feedback or mobile-specific interactions are required.

Automated Testing: Focused on the "Happy Path" and high-priority regression points (Login, Registration, Search, and Gallery rendering) to ensure core business logic remains stable after updates.