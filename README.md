# dropdown-menu

A simple JavaScript dropdown menu library.

## Installation

### Via CDN

To use the dropdown menu, simply add one of the following script tags at the end of the `<body>` tag in your HTML file:

```html
<!-- Using unpkg -->
<script src="https://unpkg.com/@spx77-e59/dropdown-menu"></script>

<!-- Using jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@spx77-e59/dropdown-menu/dist/main.js"></script>
```

## Usage

The dropdown in HTML should look like this, with the `div` containing the class name `dropdown-menu`:

```html
<div class="dropdown-menu">
  <button>Item list</button>
  <ul>
    <li>item-1</li>
    <li>item-2</li>
    <li>item-3</li>
  </ul>
</div>
```

### No Initialization Needed!

Once you add the script tag, the dropdown functionality will automatically be applied to any element with the `dropdown-menu` class. Clicking the button will toggle the visibility of the list items.

### Example

Here’s a complete example showing how to integrate the dropdown menu into your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dropdown Menu Example</title>
</head>
<body>

  <!-- Dropdown menu structure -->
  <div class="dropdown-menu">
    <button>Item list</button>
    <ul>
      <li>item-1</li>
      <li>item-2</li>
      <li>item-3</li>
    </ul>
  </div>

  <!-- Include the script to make the dropdown functional -->
  <script src="https://unpkg.com/@spx77-e59/dropdown-menu"></script>

</body>
</html>
```

### Notes

- Ensure the dropdown has the `dropdown-menu` class, as the script relies on this to add the dropdown functionality.
- The script automatically handles toggling the visibility of the `<ul>` when the `<button>` is clicked.

### Customization

If there are options for customizing the dropdown (like adding styles or additional functionality), you can include them here as well.
