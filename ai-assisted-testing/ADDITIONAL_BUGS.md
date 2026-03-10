# [BUG-AI-001] Session State Inconsistency [AI-assisted]
**Description:** The application fails to maintain the user's authentication state across page refreshes. Despite a successful login, a browser refresh triggers a session timeout or forces the user back to the login screen. This indicates an issue with the JWT token storage or session handling in the Angular service layer.
**Severity:** Major
**Priority:** High

# [BUG-AI-002] Responsive Viewport Overflow [AI-assisted]
**Description:** When accessing the gallery on mobile devices (width < 768px), the main image grid container does not properly calculate width. This results in horizontal scrolling and elements overlapping the sidebar or search navigation.
**Severity:** Minor
**Priority:** Medium

# [BUG-AI-003] Memory Leak on Gallery Interaction [AI-assisted]
**Description:** Rapidly navigating between the "Home" page and "Gallery" albums causes a steady increase in browser memory usage. This leads to browser slowdowns or potential crashes after prolonged usage.
**Severity:** Major
**Priority:** High

# [BUG-AI-004] Missing Loading States [AI-assisted]
**Description:** When performing a search or switching between albums, the UI provides no visual feedback (spinner or skeleton screen) while the API is fetching data. The UI remains static until the content suddenly snaps into place, which is poor user experience.
**Severity:** Minor
**Priority:** Low