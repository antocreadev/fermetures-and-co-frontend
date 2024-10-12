import os
from PIL import Image

def resize_and_rename_images(folder_path):
    # Parcours tous les fichiers du dossier
    for filename in os.listdir(folder_path):
        # Vérifie si le fichier est une image
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            # Création du chemin complet du fichier
            old_file_path = os.path.join(folder_path, filename)

            # Remplace les espaces par des underscores dans le nom du fichier
            new_filename = filename.replace(' ', '_')
            new_file_path = os.path.join(folder_path, new_filename)

            # Renomme le fichier
            os.rename(old_file_path, new_file_path)
            print(f'Renamed: {old_file_path} to {new_file_path}')

            # Ouvre l'image
            with Image.open(new_file_path) as img:
                # Calcule le rapport d'aspect pour éviter la déformation
                img.thumbnail((600, 400))

                # Crée un nouveau fichier avec l'image redimensionnée
                img.save(new_file_path)
                print(f'Resized and saved: {new_file_path}')

# Exemple d'utilisation
folder_path = './Images_portails_CEBEL'  # Remplace par le chemin de ton dossier
resize_and_rename_images(folder_path)
