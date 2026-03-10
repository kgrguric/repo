# Page snapshot

```yaml
- generic [ref=e4]:
  - generic:
    - banner:
      - link "Menu" [ref=e6] [cursor=pointer]:
        - /url: /angular/starterkit-photo-gallery/main
        - link "Menu" [ref=e7]:
          - /url: javascript:void(0)
        - img [ref=e8]
  - main [ref=e10]:
    - generic [ref=e17]:
      - img [ref=e19]
      - generic [ref=e20]:
        - generic [ref=e22] [cursor=pointer]:
          - img [ref=e23]
          - text: Upload image
        - generic [ref=e25]:
          - generic [ref=e26]:
            - generic [ref=e27]: Photo Name
            - textbox "Photo Name" [ref=e28] [cursor=pointer]: upload
            - generic [ref=e29]: Name taken, please choose another.
          - generic [ref=e30]:
            - generic [ref=e31]: Description
            - textbox "Description" [ref=e32] [cursor=pointer]: description
          - button "Upload" [ref=e34] [cursor=pointer]
  - contentinfo [ref=e35]:
    - generic [ref=e36]:
      - paragraph [ref=e37]:
        - text: Copyright @
        - link "Blog name" [ref=e38] [cursor=pointer]:
          - /url: javascript:void(0);
      - paragraph [ref=e39]:
        - text: Powered by
        - link "Baasic" [ref=e40] [cursor=pointer]:
          - /url: http://www.baasic.com/
```