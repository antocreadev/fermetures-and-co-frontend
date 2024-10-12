import os
from PIL import Image

def convert_and_resize_images(folder_path):
    # Crée un dossier de sortie pour les images converties
    output_folder = os.path.join(folder_path, 'converted_images')
    os.makedirs(output_folder, exist_ok=True)

    # Parcours chaque fichier dans le dossier donné
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            image_path = os.path.join(folder_path, filename)
            with Image.open(image_path) as img:
                # Redimensionne en maintenant le ratio d'aspect
                img.thumbnail((600, 400))
                
                # Crée une nouvelle image de 600x400 pixels avec un fond blanc
                new_img = Image.new("RGB", (600, 400), (255, 255, 255))
                
                # Calcule les coordonnées pour centrer l'image
                x = (new_img.width - img.width) // 2
                y = (new_img.height - img.height) // 2
                
                # Colle l'image redimensionnée sur le fond blanc
                new_img.paste(img, (x, y))

                # Enregistre l'image en format WebP
                output_file = os.path.join(output_folder, f"{os.path.splitext(filename)[0]}.webp")
                new_img.save(output_file, format='WEBP')
                print(f"Converted and resized: {output_file}")

# Remplacez 'your_folder_path' par le chemin de votre dossier contenant les images
folder_path = './'
convert_and_resize_images(folder_path)
