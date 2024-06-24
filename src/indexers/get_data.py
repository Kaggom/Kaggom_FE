import os
import PyPDF2

async def get_doc_data(embeddings):
    file_names = [
        "2024_교과과정_책자", "2024학년도_2학기_주전공_신청_변경"
    ]
    docs = []
    for name in file_names:
        file_path = os.path.join(os.getcwd(), f"src/indexers/data/{name}.pdf")
        with open(file_path, 'rb') as file:  # Correct mode 'rb' for binary read
            reader = PyPDF2.PdfReader(file)
            raw_description = reader.pages[0].extract_text() or ""
        doc = {
            "docId": str(file_names.index(name) + 1),
            "docTitle": name,
            "description": raw_description,
            #"descriptionVector": await get_embedding_vector(raw_description, embeddings=embeddings),
        }
        docs.append(doc)
    return docs


async def get_embedding_vector(text: str, embeddings):
    result = await embeddings.create_embeddings(text)
    if (result.status != 'success' or not result.output):
        if result.status == 'error':
            raise Exception(f"Failed to generate embeddings for description: <{text[:200]+'...'}>\n\nError: {result.output}")
        raise Exception(f"Failed to generate embeddings for description: <{text[:200]+'...'}>")
    
    return result.output[0]