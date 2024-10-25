import numpy as np
from PIL import Image
import open3d as o3d

# Function to convert image to point cloud based on luminance
def image_to_point_cloud(image_path, output_pcd_path):
    # Load image
    image = Image.open(image_path).convert("L")  # Convert to grayscale (Luminance)
    width, height = image.size

    # Extract pixel values and coordinates
    pixels = np.asarray(image)
    points = []

    for y in range(height):
        for x in range(width):
            luminance = pixels[y, x] / 255.0  # Normalize to [0, 1]
            z = luminance * 500  # Scale luminance for Z height
            points.append([x, y, z])

    # Convert to numpy array
    points = np.array(points)

    # Create an Open3D point cloud object
    pcd = o3d.geometry.PointCloud()
    pcd.points = o3d.utility.Vector3dVector(points)

    # Save the point cloud to a PCD file
    o3d.io.write_point_cloud(output_pcd_path, pcd)

    print(f"Point cloud saved to {output_pcd_path}")

# Run the conversion
image_path = "/Users/matthewheaton/Downloads/tradewinds.jpg"  # Change this to your image path
output_pcd_path = "winds.pcd"  # Change this to desired output path

image_to_point_cloud(image_path, output_pcd_path)
