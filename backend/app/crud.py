from sqlalchemy.orm import Session
from . import models, schemas

def get_products(db: Session):
    return db.query(models.Product).all()

def create_product(db: Session, product: schemas.ProductCreate):
    db_item = models.Product(**product.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def update_product(db: Session, product_id: int, product: schemas.ProductUpdate):
    db_item = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not db_item:
        return None
    for key, value in product.model_dump().items():
        setattr(db_item, key, value)
    db.commit()
    db.refresh(db_item)
    return db_item

def delete_product(db: Session, product_id: int):
    db_item = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not db_item:
        return False
    db.delete(db_item)
    db.commit()
    return True
