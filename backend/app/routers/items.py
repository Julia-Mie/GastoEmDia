from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app import crud, schemas
from app.database import SessionLocal

router = APIRouter(prefix="/items", tags=["items"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/", response_model=list[schemas.Item])
def read_items(db: Session = Depends(get_db)):
    return crud.get_items(db)


@router.post("/", response_model=schemas.Item)
def create_item(item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.create_item(db, item)


@router.delete("/{item_id}", response_model=list[schemas.Item])
def delete_item(item_id: int, db: Session = Depends(get_db)):
    db_item = crud.get_item(db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    crud.delete_item(db, item_id=item_id)
    return crud.get_items(db)
