import boto3
import PIL
from PIL import Image
from io import BytesIO
from os import path


s3 = boto3.resource('s3')
origin_bucket = 'mbrucker.com'
width_size = 1000
height_size = 500


def lambda_handler(event, context):
    
    for key in event.get('Records'):
        object_key = key['s3']['object']['key']
        extension = path.splitext(object_key)[1].lower()

        # Grabs the source file
        obj = s3.Object(
            bucket_name=origin_bucket,
            key=object_key,
        )
        obj_body = obj.get()['Body'].read()
    
        # Checking the extension and
        # Defining the buffer format
        if extension in ['.jpeg', '.jpg']:
            format = 'JPEG'
        if extension in ['.png']:
            format = 'PNG'

        # Resizing the image
        img = Image.open(BytesIO(obj_body))

        # If height is over the threshold, resize by height
        if img.size[1] > height_size:
            wresize = (height_size / float(img.size[1]))
            width = int(float(img.size[0]) * float(wresize))
            img = img.resize((width, height_size), PIL.Image.ANTIALIAS)
            
        elif img.size[0] > width_size:
            hresize = (width_size / float(img.size[0]))
            height = int((float(img.size[1]) * float(hresize)))
            img = img.resize((width_size, height), PIL.Image.ANTIALIAS)

        buffer = BytesIO()
        img.save(buffer, format)
        buffer.seek(0)

        # Uploading the image
        obj = s3.Object(
            bucket_name=origin_bucket,
            key='images/' + object_key,
        )
        obj.put(Body=buffer)

        # Printing to CloudWatch
        print('File saved at {}/{}'.format(
            origin_bucket,
            object_key,
        ))